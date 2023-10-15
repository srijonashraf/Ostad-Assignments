const fs = require('fs');
let jsonData = null;

// Read the JSON data from the file
fs.readFile('./src/data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading data.json:', err);
    return;
  }
  jsonData = JSON.parse(data);
});

exports.create = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Product created successfully",
      data: jsonData,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to create Product",
      error: 'Error',
    });
  }
};

exports.read = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Product retrieved successfully",
      data: jsonData,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Product not found",
    });
  }
};

exports.update = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Product updated successfully",
      data: jsonData,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to update Product",
      error: 'Error',
    });
  }
};

exports.delete = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to delete Product",
      error: 'Error',
    });
  }
};
