import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // count: 0,
    selected: 'profile',
    resume: {
      config: [
        { field: 'profile', icon: 'id' },
        { field: 'workHistory', icon: 'work' },
        { field: 'education', icon: 'book' },
        { field: 'projects', icon: 'heart' },
        { field: 'awards', icon: 'cup' },
        { field: 'contacts', icon: 'phone' }
      ],
      profile: {
        name: '张某某',
        city: '杭州',
        title: '前端开发攻城狮',
        birthday: '1992-06-20'
      },
      workHistory: [
        {
          company: '鸡飞狗跳公司',
          content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
 我的主要工作如下:
 1. 完成既定产品需求。
 2. 修复 bug。`
        },
        {
          company: '狗急跳墙责任有限公司',
          content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
 我的主要工作如下:
 1. 完成既定产品需求。
 2. 修复 bug`
        }
      ],
      education: [{ school: '清华大学', content: '本科' }, { school: '北京大学' }],
      projects: [
        { name: 'project A', content: '文字' },
        { name: 'project B', content: '文字' }
      ],
      awards: [{ name: '优秀干部', content: '假装这是一段描述奖项的话' }, { name: '三好学生' }],
      contacts: [
        { contact: 'phone', content: '18851706206' },
        { contact: 'qq', content: '413273029' }
      ]
    }
  },
  mutations: {
    switchTab(state, payload) {
      state.selected = payload
    }
  }
})
