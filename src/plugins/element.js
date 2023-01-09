import Vue from "vue";
import {
  Container,
  Header,
  Main,
  Row,
  Col,
  Card,
  Dialog,
  Link,
} from "element-ui";
import lang from "element-ui/lib/locale/lang/pt-br";
import locale from "element-ui/lib/locale";

locale.use(lang);

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Dialog);
Vue.use(Link);
