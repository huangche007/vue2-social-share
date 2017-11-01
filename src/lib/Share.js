/**
 * Created by THINK on 2017/10/31.
 */
import Share from './component/Share.vue';
Share.install = Vue => {
    Vue.component('share', Share)
}

if (typeof window !== 'undefined' && window.vue) {
    window.Share = Share
}

export default Share