"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Indexer, ZgFile, Batcher, KvClient } from '@0glabs/0g-ts-sdk';
import { ethers } from 'ethers';

const StorageManager = () => {
  // ... (core logic unchanged from previous)
  const [status, setStatus] = useState('');
  // ... (rest of functions unchanged)

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