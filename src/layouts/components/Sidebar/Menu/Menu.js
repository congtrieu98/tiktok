import PropTypes from 'prop-types';

function Menu({children}) {
    return ( 
        <nav>
            {children}
        </nav>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired //sd node vì nó chứa nhiều kiểu dữ liệu và nó render được
}

export default Menu; 