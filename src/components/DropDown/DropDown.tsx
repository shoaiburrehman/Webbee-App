import React, {useRef, useState} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
  FlexStyle,
  Text,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

import {Colors} from '../../themes/Colors';
import {Fonts} from '../../themes';
import {screenWidth, vw} from '../../themes/units';

type DropDownProps = {
  isOpen: boolean;
  toggle: () => void;
  options: Array<Record<string | number, any>>;
  onSelect: (event: GestureResponderEvent) => void;
  keyExtractor?: string;
  selected: string | number | null | undefined;
  label: string;
  containerStyles?: FlexStyle | Array<FlexStyle>;
};

const DropDown: React.VFC<DropDownProps> = props => {
  const {
    isOpen = false,
    toggle,
    options = [],
    onSelect = () => {},
    label = '',
    selected = null,
    keyExtractor = 'Id',
    containerStyles,
  } = props;

  const [dropdownTop, setDropdownTop] = useState(0);
  const DropdownButton = useRef<TouchableOpacity | null>(null);

  const toggleDropdown = (): void => {
    isOpen ? toggle() : openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton?.current?.measure(
      (
        _fx: number,
        _fy: number,
        _w: number,
        h: number,
        _px: number,
        py: number,
      ) => {
        setDropdownTop(py + h);
      },
    );
    setTimeout(() => {
      toggle();
    }, 50);
  };

  return (
    <View style={[styles.container, containerStyles]}>
      <Modal visible={isOpen} animationType="none" transparent>
        <ScrollView
          style={[
            styles.dropdown,
            {top: dropdownTop},
            options.length < 4 && {height: '18%'},
          ]}
          showsVerticalScrollIndicator={false}>
          {options.map((item: any) => {
            const {Id, Name} = item;
            return (
              <View style={styles.content}>
                <TouchableOpacity onPress={() => onSelect(item)}>
                  <Text style={styles.option}>{Name}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <TouchableWithoutFeedback onPress={toggle}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      </Modal>
      <TouchableOpacity
        onPress={toggleDropdown}
        ref={DropdownButton}
        style={styles.closedView}
        activeOpacity={0.5}>
        <Text style={styles.label(!!selected)}>{label}</Text>
        <View style={styles.arrow}>
          <SvgIcon iconName="arrowDown" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default DropDown;

const styles = StyleSheet.create<any>({
  container: {
    flex: 1,
  },
  label: (bool: boolean) => ({
    marginLeft: vw * 13,
    ...Fonts.Regular(14, Colors.WHITELIGHT),
    ...(bool && {color: Colors.PINK}),
  }),
  closedView: {
    height: 46,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    borderColor: Colors.WHITELIGHT,
    borderWidth: 1,
    borderRadius: 5,
  },
  option: {
    marginLeft: vw * 13,
    ...Fonts.Regular(14, Colors.WHITE),
  },
  arrow: {
    marginRight: 15,
  },
  dropdown: {
    position: 'absolute',
    width: screenWidth / 1.06,
    height: '25%',
    borderColor: Colors.WHITELIGHT,
    borderWidth: 1,
    borderTopWidth: 0,
    borderRadius: 5,
    zIndex: 99,
    backgroundColor: Colors.PRIMARY_COLOR,
    marginHorizontal: vw * 12,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: vw * 12,
  },
  overlay: {
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
});
