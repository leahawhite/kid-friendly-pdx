import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

import {
  faSearch,
  faStar as fasStar,
  faStarHalfAlt,
  faSpinner,
  faCompass,
  faMapMarkerAlt,
  faClock,
  faDirections,
  faPhone,
  faPen,
  faChild,
  faCircle,
  faCamera,
  faGlobe,
  faBan,
  faPlusCircle,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

export default function registerIcons() {

  library.add(
		faSearch,
    farStar,
    fasStar,
    faStarHalfAlt,
    faSpinner,
    faMapMarkerAlt,
    faCompass,
    faDirections,
    faClock,
    faPhone,
    faCamera,
    faCircle,
    faPen,
    faChild,
    faGlobe,
    faBan,
    faPlusCircle,
    faTrashAlt
	);
}