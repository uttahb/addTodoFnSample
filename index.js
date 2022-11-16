

const todo_package_sample3 = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
  }

  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Hello todo_package_sample3`}))
  res.end()
  
}

export default todo_package_sample3
