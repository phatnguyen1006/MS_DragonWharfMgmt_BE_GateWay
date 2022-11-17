require("dotenv").config();

const MANAGEMENT_NODE_URL = process.env.MANAGEMENT_NODE_URL || "http://localhost:8001";
const BUILDING_NODE_URL = process.env.BUILDING_NODE_URL || "http://localhost:8002";

module.exports = {
    MANAGEMENT_NODE_URL,
    BUILDING_NODE_URL
}