
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import Header from './Header';
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => { }

function Menu({ children, items = [], onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItems = () => {


        return current.data.map((item, index) => {

            const isParent = !!item.children

            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [
                        ...prev, item.children
                    ]);
                }
                else {
                    onChange(item)
                }
            }}
            />
        });

    }

    const class_list = cx('menu-list')
    const class_menu = cx('menu-popper')
    return (
        <Tippy
            interactive
            delay={[0, 800]}
            offset={[12, 8]}
            placement='bottom-end'
            render={attrs => (
                <div className={class_list} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={class_menu}>
                        {history.length > 1 && <Header title='Language'
                            onBack={() => {
                                setHistory(prev => prev.slice(0, prev.length - 1))
                            }} />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;