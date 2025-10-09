"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Indexer, ZgFile, Batcher, KvClient } from '@0glabs/0g-ts-sdk';
import { ethers } from 'ethers';

const StorageManager = () => {
  const [status, setStatus] = useState('');
  const [rootHash, setRootHash] = useState('');
  const [fileContent, setFileContent] = useState('');

  const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL!;
  const INDEXER_RPC = process.env.NEXT_PUBLIC_INDEXER_RPC!;
  const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY!;

  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);
  const indexer = new Indexer(INDEXER_RPC);

  // Demo KV Client for key-value storage
  const kvClient = new KvClient('http://3.101.147.150:6789'); // As per docs

  // Handle File Upload
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setStatus('Uploading...');
    try {
      const zgFile = await ZgFile.fromFile(file);
      const [tree, treeErr] = await zgFile.merkleTree();
      if (treeErr) throw new Error(`Merkle tree error: ${treeErr}`);

      const root = tree?.rootHash();
      console.log('File Root Hash:', root);

      const [tx, uploadErr] = await indexer.upload(zgFile, RPC_URL, signer);
      if (uploadErr) throw new Error(`Upload error: ${uploadErr}`);

      setRootHash(root || '');
      setStatus(`Upload successful! TX: ${tx}`);
      await zgFile.close();
    } catch (error) {
      setStatus(`Error: ${(error as Error).message}`);
    }
  };

  // Handle File Download
  const handleDownload = async () => {
    if (!rootHash) return;
    setStatus('Downloading...');
    try {
      const outputPath = 'downloaded-file'; // Browser: Use Blob for download
      const err = await indexer.download(rootHash, outputPath, true);
      if (err) throw new Error(`Download error: ${err}`);
      setStatus('Download successful!');
      setFileContent('Downloaded file content: [Mock trade data]');
    } catch (error) {
      setStatus(`Error: ${(error as Error).message}`);
    }
  };

  // Handle KV Upload
  const handleKVUpload = async () => {
    setStatus('Uploading to KV...');
    try {
      const [nodes, err] = await indexer.selectNodes(1);
      if (err) throw new Error(`Node selection error: ${err}`);

      const { getFlowContract } = await import('@0glabs/0g-ts-sdk');
      const flowContract = getFlowContract(signer);

      const batcher = new Batcher(1, nodes, flowContract, RPC_URL);

      const streamId = '0x123...'; // Replace with real stream ID
      const key = Uint8Array.from(Buffer.from('BTC_RR', 'utf-8'));
      const value = Uint8Array.from(Buffer.from('2.5', 'utf-8'));
      batcher.streamDataBuilder.set(streamId, key, value);

      const [tx, batchErr] = await batcher.exec();
      if (batchErr) throw new Error(`Batch error: ${batchErr}`);

      setStatus(`KV Upload successful! TX: ${tx}`);
    } catch (error) {
      setStatus(`Error: ${(error as Error).message}`);
    }
  };

  // Handle KV Download
  const handleKVDownload = async () => {
    setStatus('Retrieving from KV...');
    try {
      const streamId = '0x123...'; // Replace with real stream ID
      const key = Uint8Array.from(Buffer.from('BTC_RR', 'utf-8'));
      const value = await kvClient.getValue(streamId, ethers.encodeBase64(key));
      setFileContent(`Retrieved KV Value: ${value}`);
      setStatus('KV Download successful!');
    } catch (error) {
      setStatus(`Error: ${(error as Error).message}`);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10">
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        0G Storage Manager
      </h3>
      <input type="file" onChange={handleUpload} className="w-full p-4 bg-white/10 rounded-xl border border-white/20 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-500" />
      <motion.button whileHover={{ scale: 1.02 }} onClick={handleDownload} disabled={!rootHash} className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed">
        Download File
      </motion.button>
      <motion.button whileHover={{ scale: 1.02 }} onClick={handleKVUpload} className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
        Upload to KV
      </motion.button>
      <motion.button whileHover={{ scale: 1.02 }} onClick={handleKVDownload} className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl">
        Download from KV
      </motion.button>
      {status && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-center p-3 bg-green-900/20 rounded-xl border border-green-400/30">{status}</motion.p>}
      {fileContent && <p className="text-white text-center p-3 bg-blue-900/20 rounded-xl border border-blue-400/30">{fileContent}</p>}
    </motion.div>
  );
};

export default StorageManager;