import KbnBoardView from '@/components/templates/KbnBoardView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskDetailModal from '@/components/templates/KbnTaskDetailModal.vue'

export default [
	{
		path: '/',
		component: KbnBoardView,
		meta: { requireAuth: true },
	},
	{
		path: '/login',
		component: KbnLoginView,
	},
	{
		path: '/tasks/:id',
		component: KbnTaskDetailModal,
		meta: { requireAuth: true },
	},
	{
		path: '*',
		redirect: '/',
	},
]
