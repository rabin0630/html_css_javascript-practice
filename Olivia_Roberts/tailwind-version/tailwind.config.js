module.exports = {
　　content: [ //監視するファイルの設定
  "./src/*.{js,html}",
  "./src/**/*.{js,html}",
　　],
　　theme: {
　　　　extend: {},
　　},
　　plugins: [],
}

module.exports = {
  content: [],
  corePlugins: {
    //リセットCSSを無効化
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}