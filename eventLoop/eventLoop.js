// file: eventLoop.js

var events = require("events");

// 创建事件Emitter
var eventEmitter = new events.EventEmitter();

// 定义一系列事件Handles
var connectHandler = function connected() {
    console.log("连接成功！");

    // 触发数据接收事件
    eventEmitter.emit("data_received");
}

// 绑定连接事件Handle
eventEmitter.on("connection", connectHandler);

// 定义及绑定数据接收事件Handle
eventEmitter.on("data_received", function(){
    console.log("数据接收成功！");

    // 触发关闭连接事件
    eventEmitter.emit("close");
});

// 定义及绑定连接关闭事件Handle
eventEmitter.on("data_received", function(){
    console.log("连接关闭成功！");
});

// 触发连接事件
eventEmitter.emit('connection');

console.log("程序执行完毕。");