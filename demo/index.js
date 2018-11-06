
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';
const pkg = require('../package.json')




const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";
var DemoArray = [{"example":<Demo1 />,"title":" ac-export-word","code":"/**\n *\n * @title ac-export-word\n * @description 该组件目的是解决将一个页面通过id导出成为word文档,目前页面中图表、地图不能将其导出\n *\n */\nimport React, { Component } from 'react';\nimport { Button, Icon } from 'tinper-bee';\nimport ExportWord from '../../src/index';\n\nclass WordTest extends Component {\n\n  render() {\n    // word 样式\n    const styles = '.testClass{background-color: #ff00ff;}';\n    return (\n      <div className=\"wordTest\">\n        <ExportWord wordId=\"wordTestId\" wordStyles={styles}></ExportWord>\n        <div id=\"wordTestId\" className=\"wordContent\">\n          <table>\n            <tbody>\n            <tr>\n              <td>\n                <img\n                  src=\"https://www.yonyoucloud.com/attached/image/20180725/20180725161116_24735.png\"\n                  alt=\"\"/>\n              </td>\n              <td>\n                <p className=\"testClass\">\n                  用友始终坚持用户之友的核心价值观，用友作为综合型、融合化、生态式的企业服务提供商，服务企业的业务、金融和IT三位一体的创新发展，致力于服务中国及全球企业与公共组织的数字化转型与智能化发展，推动企业服务产业变革，用创想与技术推动商业和社会进步。\n                </p>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <img\n                  src=\"https://www.yonyoucloud.com/attached/image/20180725/20180725170736_15332.gif\"/>\n              </td>\n              <td>\n                用友始终坚持用户之友的核心价值观，用友作为综合型、融合化、生态式的企业服务提供商，服务企业的业务、金融和IT三位一体的创新发展，致力于服务中国及全球企业与公共组织的数字化转型与智能化发展，推动企业服务产业变革，用创想与技术推动商业和社会进步。\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <img\n                  src=\"https://www.yonyoucloud.com/attached/image/20180727/20180727112303_68384.png\"\n                  alt=\"\"/>\n              </td>\n              <td>\n                用友始终坚持用户之友的核心价值观，用友作为综合型、融合化、生态式的企业服务提供商，服务企业的业务、金融和IT三位一体的创新发展，致力于服务中国及全球企业与公共组织的数字化转型与智能化发展，推动企业服务产业变革，用创想与技术推动商业和社会进步。\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <img\n                  src=\"https://www.yonyoucloud.com/attached/image/20180727/20180727150348_90561.png\"\n                  alt=\"\"/>\n              </td>\n              <td>\n                用友始终坚持用户之友的核心价值观，用友作为综合型、融合化、生态式的企业服务提供商，服务企业的业务、金融和IT三位一体的创新发展，致力于服务中国及全球企业与公共组织的数字化转型与智能化发展，推动企业服务产业变革，用创想与技术推动商业和社会进步。\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    );\n  }\n}\n\n\n","desc":" 该组件目的是解决将一个页面通过id导出成为word文档,目前页面中图表、地图不能将其导出"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ process.env.NODE_ENV==='development'?code:code.replace('../../src/index.js',pkg.name).replace('../../src/index',pkg.name) }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));
