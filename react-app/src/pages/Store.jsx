import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import myImage from '../static/images/9sH_WJPWW8k.jpg'
import shirtRed from '../static/images/t-red.png'
import shirtBlue from '../static/images/shirt-blue.png'
import shirtBlack from '../static/images/t-black.png'
import shirtYellow from '../static/images/t-yellow.png'
import MyButton from "../components/UI/button/MyButton";
import Input from "../components/UI/input/Input";
import Select from "../components/UI/select/Select";

const Store = () => {
    return (
        <div>
            <StoreApp goods={DATA} />
            {/*<ControlledCarousel goods={DATA}/>*/}
        </div>
    );
};

export default Store;

function ControlledCarousel({goods}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        console.log(index)
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} style={{maxWidth: "480px"}}>
            {goods.map(n =>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={n.image}
                        alt="First slide"
                        style={{width: "60px", height: "600px"}}
                    />
                    <Carousel.Caption>
                        <h3>Цена</h3>
                        <p>{n.cost}</p>
                        <MyButton>Купить</MyButton>
                    </Carousel.Caption>
                </Carousel.Item>)
            }
        </Carousel>
    );
}

const Block = ({ HeaderTag = 'h2', headerText, className = '', children }) => (
    <div className={className}>
        <HeaderTag>{headerText}</HeaderTag>
        {children}
    </div>
);

const CountryFilter = ({ value, onChange, countries }) => (
    <Block headerText="Country">
        {/*<Select value={value} onChange={onChange}>*/}
        {/*    <option value="">-- Country --</option>*/}
        {/*    {countries.map(n => <option key={n}>{n}</option>)}*/}
        {/*</Select>*/}
        <select onChange={onChange} value={value}>
            <option value="">-- Country --</option>
            {countries.map(n => <option key={n}>{n}</option>)}
        </select>
    </Block>
);

const SizeFilter = ({ value, onChange, sizes }) => (
    <Block headerText="Size">
        {sizes.map(n => (
            <label className="size" key={n}>
                <input
                    type="checkbox"
                    value={n}
                    checked={value.includes(n)}
                    onChange={onChange}
                />
                {n}
            </label>
        ))}
    </Block>
);

const PriceInput = ({ index, ...props }) => (
    <input className="price-input" data-index={index} {...props} />
    // <Input
    //     value={props.value.target}
    //     // onChange={e => props({...task, title: e.target.value})}
    //     type={"text"}
    //     placeholder={"Название задачи"}
    // />
);

const PriceFilter = ({ value, onChange }) => (
    <Block headerText="Price">
        <PriceInput value={value[0]} onChange={onChange} index="0" />
        &nbsp;-&nbsp;
        <PriceInput value={value[1]} onChange={onChange} index="1" />
        &nbsp;usd&nbsp;
    </Block>
);

const GoodsList = ({ goods }) => (
    <div>
        {goods.map(n => (
            <Block className="good" HeaderTag="h3" headerText={n.name} key={n.id}>
                <img src={n.image} />
                <p>Цена: {n.cost}</p>
                <MyButton>Купить</MyButton>
            </Block>
        ))}
    </div>
);

const StoreApp = ({ goods }) => {
    const countries = React.useMemo(() => [...new Set(goods.map(n => n.country))], [ goods ]);
    const sizes = React.useMemo(() => [...new Set(goods.map(n => n.size))], [ goods ]);

    const [ country, setCountry ] = React.useState('');
    const [ size, setSize ] = React.useState([]);
    const [ price, setPrice ] = React.useState([ '', '' ]);

    const onCountryChange = e => setCountry(e.target.value);
    const onSizeChange = ({ target: { checked, value } }) => {
        setSize((!size.includes(value) && checked)
            ? [ ...size, value ]
            : size.filter(n => n !== value)
        );
    };
    const onPriceChange = ({ target: { value, dataset: { index } } }) => {
        setPrice(price.map((n, i) => i === +index ? value : n));
    };

    const filteredGoods = goods.filter(n => (
        (!country || n.country === country) &&
        (!size.length || size.includes(n.size)) &&
        (!price[0] || price[0] <= n.cost) &&
        (!price[1] || price[1] >= n.cost)
    ));

    return (
        <div>
            <div className="filters">
                <CountryFilter value={country} onChange={onCountryChange} countries={countries} />
                <SizeFilter value={size} onChange={onSizeChange} sizes={sizes} />
                <PriceFilter value={price} onChange={onPriceChange} />
            </div>
            <ControlledCarousel goods={filteredGoods} />
            {/*<GoodsList goods={filteredGoods} />*/}
        </div>
    );
}

const DATA = [
    {
        "sex" : "male",
        "name" : "Рубашка №1",
        "cost" : 1000,
        "country" : "france",
        "image" : "/images/t-red.png",
        "size": "S"
    },
    {
        "sex" : "male",
        "name" : "Рубашка №2",
        "cost" : 1200,
        "country" : "turkey",
        "image" : "/images/t-black.png",
        "size": "M"
    },
    {
        "sex" : "male",
        "name" : "Рубашка №3",
        "cost" : 1700,
        "country" : "china",
        "image" : "/images/t-yellow.png",
        "size": "L"
    },
    {
        "sex" : "male",
        "name" : "Рубашка №4",
        "cost" : 2000,
        "country" : "turkey",
        "image" : "/images/shirt-blue.png",
        "size": "XL"
    }
].map((n, i) => ({ ...n, id: i + 1 }));

// ReactDOM.render(<StoreApp goods={DATA} />, document.getElementById('app'));
