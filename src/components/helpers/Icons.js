import {
  faHouse,
  faCartShopping,
  faBagShopping,
  faHorse,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const icons = () =>
  library.add(faHouse, faCartShopping, faBagShopping, faHorse);

export default icons;
