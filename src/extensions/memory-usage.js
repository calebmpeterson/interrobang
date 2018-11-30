const byteSize = require("byte-size");

const format = bytes => {
  const obj = byteSize(bytes);
  return `${obj.value} ${obj.unit}`;
};

module.exports = server => {
  console.log(`Installing memory-usage extension`);

  // TODO log latest memory-usage stats onRequest

  server.ext({
    type: "onRequest",
    method: function(request, h) {
      console.log("onRequest");
      return h.continue;
    }
  });

  try {
    const memoryUsage = require("memory-usage");
    memoryUsage(5000).on("data", stats => {
      console.log(
        `Process: ${format(stats.rss)} | Heap: ${format(
          stats.heapUsed
        )} used / ${format(stats.heapTotal)} total`
      );
    });
  } catch (e) {
    console.warn(`Failed to initialize memory-usage extension`);
  }
};
