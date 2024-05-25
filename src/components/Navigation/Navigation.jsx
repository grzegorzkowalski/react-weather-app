import { Row, Col } from 'antd';
import CustomSwitch from './CustomSwitch';
import SearchBar from './SearchBar';
import LocationBtn from './LocationBtn';

const Navigation = () => {
    return (
        <Row role="nav" gutter={[50, 30]} justify="space-between">
            <Col span={24} lg={4}>
                <CustomSwitch />
            </Col>
            <Col span={24} md={12} lg={14}>
                <SearchBar />
            </Col>
            <Col span={24} md={12} lg={6}>
                <LocationBtn />
            </Col>
        </Row>
    );
};

export default Navigation;

