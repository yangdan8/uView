// Type definitions for uview 2.0.0-31920210609001
// Definitions: https://github.com/yangdan8/uView.git
import Vue from 'vue';

export interface UTag extends Vue {
  /**
   * 主题类型
   * @options success / info / warning / error
   * @default primary
   */
  type?: string;

  /**
   * 标签大小
   * @options mini
   * @default default
   */
  size?: string;

  /**
   * 标签形状
   * @options circle / circleLeft / circleRight
   * @default square
   */
  shape?: string;

  /**
   * 标签的文字内容
   */
  text?: string;

  /**
   * 自定义标签的背景颜色
   */
  'bg-color'?: string;

  /**
   * 文字的颜色
   */
  color?: string;

  /**
   * 标签的边框颜色
   */
  'border-color'?: string;

  /**
   * 关闭按钮的颜色
   */
  'close-color'?: string;

  /**
   * 点击标签时，会通过"click"事件返回该值
   */
  index?: string | number;

  /**
   * 模式选择，见文档说明
   * @options dark / plain
   * @default light
   */
  mode?: string;

  /**
   * 是否可关闭，设置为"true"，文字右边会出现一个关闭图标
   * @options true
   * @default false
   */
  closeable?: boolean;

  /**
   * 标签显示与否
   * @options false
   * @default true
   */
  show?: boolean;

  /**
   * 点击标签触发
   * @param index 传递的index参数值
   */
  $emit(eventName: 'click', index: number): this;

  /**
   * closeable为true时，点击标签关闭按钮触发
   * @param index 传递的index参数值
   */
  $emit(eventName: 'close', index: number): this;
}
