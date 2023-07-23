import React, {Ref, ReactNode, forwardRef, ReactElement} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {vh, vw} from '../../themes/units';
import {APP_SHADOW, Colors} from '../../themes/Colors';
import {Fonts} from '../../themes';

interface ModalProps {
  openModal: boolean;
  setOpenModal: (flag: boolean) => void;
  options: object[];
  onItemSelect: (val: object) => void;
}

const ModalViewWrapper = (props: ModalProps) => {
  return (
    <Modal
      visible={props?.openModal}
      transparent={true}
      onRequestClose={() => {
        props?.setOpenModal(!props?.openModal);
      }}>
      <View style={styles.centeredView}>
        <TouchableWithoutFeedback
          onPress={() => props?.setOpenModal(!props?.openModal)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalView}>
          {props?.options.map((item, index) => {
            return (
              <TouchableOpacity
                style={[styles.touchableModalItem]}
                onPress={() => props?.onItemSelect(item)}>
                <Text style={styles.touchableModalText}>{item.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </Modal>
  );
};

export default ModalViewWrapper;

const styles = StyleSheet.create({
  centeredView: {
    height: vh * 100,
    width: vw * 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  modalView: {
    paddingTop: vh,
    width: vw * 85,
    height: vw * 70,
    backgroundColor: 'white',
    ...APP_SHADOW,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  touchableModalItem: {
    flexDirection: 'row',
    paddingVertical: vh * 1.9,
  },
  touchableModalText: {
    color: Colors.BLACK,
    marginLeft: vw * 5,
    ...Fonts.Regular(16),
  },
});
