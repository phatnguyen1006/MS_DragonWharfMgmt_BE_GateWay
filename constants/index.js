require("dotenv").config();

const MANAGEMENT_NODE_URL = process.env.MANAGEMENT_NODE_URL || "http://localhost:8001";
const BUILDING_NODE_URL = process.env.BUILDING_NODE_URL || "http://localhost:8002";
const STATUE_NODE_URL = process.env.STATUE_NODE_URL || "http://localhost:8003";

module.exports = {
    MANAGEMENT_NODE_URL,
    BUILDING_NODE_URL,
    STATUE_NODE_URL
}
