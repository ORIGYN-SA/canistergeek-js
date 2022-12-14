"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogMessagesList = void 0;
const React = __importStar(require("react"));
const antd_1 = require("antd");
const lodash_1 = __importDefault(require("lodash"));
const { Panel } = antd_1.Collapse;
const LogMessagesList = (props) => {
    if (lodash_1.default.isEmpty(props.listItems)) {
        return React.createElement(antd_1.Empty, { image: antd_1.Empty.PRESENTED_IMAGE_SIMPLE });
    }
    console.log('Props from list: ', props);
    return (React.createElement(React.Fragment, null,
        React.createElement(antd_1.Row, { gutter: [16, 16], className: 'logMessagesList logMessagesListPreWrap' },
            React.createElement(antd_1.Col, { span: 24 },
                React.createElement(antd_1.Collapse, { accordion: true }, props.listItems.map((item, idx) => {
                    const data = JSON.stringify(item.logMessagesData.data, (key, value) => {
                        // console.log('transformations', key, value)
                        let r = value;
                        if (typeof value === "bigint") {
                            r = value.toString();
                        }
                        if (key === "Principal") {
                            // console.log('principal', value.toString())
                            r = value.toString();
                        }
                        return r;
                    }, 2);
                    return (React.createElement(Panel, { header: props.lineFormat(item), key: `${props.sequence}_${idx}` },
                        React.createElement("p", null, data)));
                    // return (
                    //     <div key={`${props.sequence}_${idx}`}>
                    //         {props.lineFormat(item)}
                    //     </div>
                    // );
                }))),
            React.createElement(antd_1.Col, null,
                React.createElement(antd_1.Button, { onClick: props.onClickLoadMore, disabled: props.loadMoreDisabled || props.inProgress, loading: props.inProgress }, "Load More")))));
};
exports.LogMessagesList = LogMessagesList;
//# sourceMappingURL=LogMessagesList.js.map