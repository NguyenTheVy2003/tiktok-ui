import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const defaultFn = () => { }

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]
    const class_list = cx('menu-list')
    const class_menu = cx('menu-popper')
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

    const renderResult = attrs => (
        <div className={class_list} tabIndex="-1" {...attrs}>
            <PopperWrapper className={class_menu}>
                {history.length > 1 && <Header
                    title={current.title}
                    onBack={handleBack} />}
                <div
                    className={cx('menu-body')}>
                    {renderItems()}
                </div>
            </PopperWrapper>
        </div>
    )

    const handleBack = () => {

        setHistory(
            prev => prev.slice(0, prev.length - 1))
    }

    // Reset to fist Page
    const handleReset = () => {
        setHistory(prev => prev.slice(0, 1))
    }
    return (
        <Tippy
            interactive
            delay={[0, 800]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            placement='bottom-end'
            render={renderResult}
            onHide={handleReset}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Menu;