const SocialFeed = () => {
  const posts = [
    { user: 'TraderX', content: 'Bullish on ETH! Entry at $3,000.', likes: 15 },
    { user: 'CryptoY', content: 'Validated BTC trade, 2:1 R/R.', likes: 8 },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Social Feed</h3>
      <ul className="space-y-2">
        {posts.map((post, index) => (
          <li key={index} className="p-2 bg-gray-700 rounded">
            <span className="font-bold">{post.user}</span>: {post.content} <span className="text-gray-400">({post.likes} likes)</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialFeed;