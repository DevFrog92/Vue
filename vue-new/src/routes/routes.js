import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'

//TODO: 왜 오류가 났는지 찾아볼 것
export default {
  [
    {
      path:'/',
      redirect :'/news',
    },
    {
      // path : url 주소
      path :'/news',
      // component :url 주소로 갔을 때 표시될 컴포넌트
      component:NewsView,
    },
    {
      path :'/ask',
      component:AskView,
    },
    {
      path :'/jobs',
      component:JobsView,
    },
    {
      path:'/item',
      component:ItemView,
    },
    {
      path:'/user',
      compoent:UserView,
    }
  ]
}