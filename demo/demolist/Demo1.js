/**
 *
 * @title ac-export-word
 * @description 该组件目的是解决将一个页面通过id导出成为word文档,目前页面中图表、地图不能将其导出
 *
 */
import React, { Component } from 'react';
import { Button, Icon } from 'tinper-bee';
import ExportWord from '../../src/index';

class WordTest extends Component {

  render() {
    // word 样式
    const styles = '.testClass{background-color: #ff00ff;}';
    return (
      <div className="wordTest">
        <ExportWord wordId="wordTestId" wordStyles={styles}></ExportWord>
        <div id="wordTestId" className="wordContent">
          <table>
            <tbody>
            <tr>
              <td>
                <img
                  src="https://www.yonyoucloud.com/attached/image/20180725/20180725161116_24735.png"
                  alt=""/>
              </td>
              <td>
                <p className="testClass">
                  用友始终坚持用户之友的核心价值观，用友作为综合型、融合化、生态式的企业服务提供商，服务企业的业务、金融和IT三位一体的创新发展，致力于服务中国及全球企业与公共组织的数字化转型与智能化发展，推动企业服务产业变革，用创想与技术推动商业和社会进步。
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://www.yonyoucloud.com/attached/image/20180725/20180725170736_15332.gif"/>
              </td>
              <td>
                用友始终坚持用户之友的核心价值观，用友作为综合型、融合化、生态式的企业服务提供商，服务企业的业务、金融和IT三位一体的创新发展，致力于服务中国及全球企业与公共组织的数字化转型与智能化发展，推动企业服务产业变革，用创想与技术推动商业和社会进步。
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://www.yonyoucloud.com/attached/image/20180727/20180727112303_68384.png"
                  alt=""/>
              </td>
              <td>
                用友始终坚持用户之友的核心价值观，用友作为综合型、融合化、生态式的企业服务提供商，服务企业的业务、金融和IT三位一体的创新发展，致力于服务中国及全球企业与公共组织的数字化转型与智能化发展，推动企业服务产业变革，用创想与技术推动商业和社会进步。
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://www.yonyoucloud.com/attached/image/20180727/20180727150348_90561.png"
                  alt=""/>
              </td>
              <td>
                用友始终坚持用户之友的核心价值观，用友作为综合型、融合化、生态式的企业服务提供商，服务企业的业务、金融和IT三位一体的创新发展，致力于服务中国及全球企业与公共组织的数字化转型与智能化发展，推动企业服务产业变革，用创想与技术推动商业和社会进步。
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default WordTest;
