import store from '../../redux/store';
import { openPicker } from '../../redux/actions/picker';
import { PIC_FROM_CAMERA, PIC_FROM_GALLERY } from '../../components/platform-components/PickerContainer';


export default function imagePick(obj) {
    const {actionContext, options} = obj;

    const PICKER_TYPE = options.via === 'camera' ? PIC_FROM_CAMERA : PIC_FROM_GALLERY;

    store.dispatch(openPicker(PICKER_TYPE, actionContext, options));
}