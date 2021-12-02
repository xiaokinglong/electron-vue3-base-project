import { defineComponent } from "vue";
import './style.less'
const TopNav = defineComponent({
  setup(props) {
    return () => (
      <div class="code-top-nav">
        topNav
      </div>
    );
  },
});

export default TopNav;
