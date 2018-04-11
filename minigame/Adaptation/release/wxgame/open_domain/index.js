wx.onMessage(data => {
  console.log("Open Domain:");
  console.log(data)
  let sharedCanvas = wx.getSharedCanvas()
  let context = sharedCanvas.getContext('2d')
  context.fillStyle = 'red'
  context.fillRect(0, 0, 500, 500)
})