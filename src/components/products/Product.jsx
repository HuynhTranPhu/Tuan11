import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
//Khai báo mảng products
    const products=
    [
        {
        _id: "5fc5fec0115bde47d0eef5ba",
        id_category: "5fa943bc663ec50988210a31",
        name: "Váy Ngắn",
        price: 10,
        id_brand: "5fbbaf85c90edd1be885b32c",
        img: "https://res.cloudinary.com/dpa6e5lwv/image/upload/v1606811327/z9xdlgqaw138vi090fg0.jpg",
        description: "Kiểu dáng bút chì dài đến gối, ôm chân và tôn dáng cực kỳ luôn Hàng Fashion chất liệu jean co giãn mạnh, chất nhẹ, mềm, mặt thích",
        color: "Black",
        size: "M",
        count: 4,
        status: true,
        },
        {
        _id: "5fc5ffa5115bde47d0eef5bb",
        id_category: "5fa943bc663ec50988210a31",
        name: "T-Shirt Women",
        price: 11,
        id_brand: "5fbbafc8c90edd1be885b32d",
        img: "https://res.cloudinary.com/dpa6e5lwv/image/upload/v1606811556/og8504bsfottni6fbc21.jpg",
        description: "Áo thun tee unisex swag T-shirt form rộng tay lỡ, chất thun mịn đẹp, có cả hình thật hoặc video luôn ạ, nên khách đặc biệt YÊN TÂM nha ^^ Style cá tính, năng động, truất",
        color: "Blue",
        size: "M",
        count: 11,
        status: true,
        },
        {
        _id: "5fc6002f115bde47d0eef5bc",
        id_category: "5fbbaf07ea2dc115688cfd1b",
        name: "Đầm Dài",
        price: 12,
        id_brand: "5fbbaf85c90edd1be885b32c",
        img: "https://res.cloudinary.com/dpa6e5lwv/image/upload/v1606811693/yxp7h0zci8hwkijo2jay.jpg",
        description: "Đầm được thiết kế đẹp phù hợp với xu hướng hiện nay Sản phẩm được may đo cẩn thận, tỉ mỉ Phù hợp với nhiều lứa tuổi, nhiều vóc dáng Dễ dàng kết hợp với nhiều loại phụ kiện, trang phục",
        color: "Blue",
        size: "S",
        count: 10,
        status: true,
        },
        {
        _id: "5fc60094115bde47d0eef5bd",
        id_category: "5fbbaf07ea2dc115688cfd1b",
        name: "Áo Tay Dài",
        price: 13,
        id_brand: "5fbbafc8c90edd1be885b32d",
        img: "https://res.cloudinary.com/dpa6e5lwv/image/upload/v1606811795/ncfpvhdhft2h8xx2xeyq.jpg",
        description: "Sản phẩm theo đuổi phong cách tối giản, phóng khoáng và hiện đại nhưng vẫn thể hiện cái tôi cá tính trong kiểu dáng, khéo léo cân bằng giữa sự mạnh mẽ và nét mềm mại nữ tí",
        color: "Brown",
        size: "M",
        count: 15,
        status: true,
        },
        {
        _id: "5fc60104115bde47d0eef5be",
        id_category: "5fbbaf07ea2dc115688cfd1b",
        name: "T-Shirt Men",
        price: 14,
        id_brand: "5fab52245e8d532a70b6e629",
        img: "https://res.cloudinary.com/dpa6e5lwv/image/upload/v1606811907/b9kaio93mhe9zqzr2o2g.jpg",
        description: "Thiết kế thời trang lịch thiệp, tinh tế Được giới công sở ưa chuộng nhất Chất vải cực đẹp, dễ chịu, thoáng mát",
        color: "Blue",
        size: "M",
        count: 16,
        status: true,
        },
        {
        _id: "5fc601a5115bde47d0eef5bf",
        id_category: "5fab493b128e7b156c2d4a58",
        name: "Quần Jeans",
        price: 15,
        id_brand: "5fab52245e8d532a70b6e629",
        img: "https://res.cloudinary.com/dpa6e5lwv/image/upload/v1606812068/mq5xgrxmfjiafw1spbiw.jpg",
        description: "Thiết kế độc đáo màu sắc trang nhã thời thượng đủ kích thước cho mọi người",
        color: "Blue",
        size: "M",
        count: 17,
        status: true,
        },
        {
        _id: "5fc601f0115bde47d0eef5c0",
        id_category: "5fab493b128e7b156c2d4a58",
        name: "Đầm Nữ",
        price: 15,
        id_brand: "5fbbafc8c90edd1be885b32d",
        img: "https://res.cloudinary.com/dpa6e5lwv/image/upload/v1606812143/umhhy5fquyiwtsc6dtjn.jpg",
        description: "Thiết kế theo hơi hướng cá tính Thiết kế tinh tế đến từng đường may, chất liệu mềm mại. Chất liệu sản phẩm cotton 2 chiều tôn dáng cực chuẩn. Phong cách trẻ trung, thanh lịch, sang trọng, , giúp bạn tự tin tỏa sáng khi xuất hiện. Tôn vinh thần thái, vẻ đẹp thanh lịch hiện đại, toát được nét dịu dàng, nữ tính vốn có của mình.",
        color: "Brown",
        size: "M",
        count: 15,
        status: true,
        },
        {
        _id: "5fc60293115bde47d0eef5c1",
        id_category: "5fbbaf4cc90edd1be885b32b",
        name: "Áo Thun Tay Dài",
        price: 15,
        id_brand: "5fab52245e8d532a70b6e629",
        img: "https://res.cloudinary.com/dpa6e5lwv/image/upload/v1606812306/ohk5wiia1ykj6x0gb9xc.jpg",
        description: "Kiểu dáng form rộng tay dài, hoa tiết in chữ Chất vải đẹp, không co rút , mềm mịn, mặc siêu mát.",
        color: "Brown",
        size: "M",
        count: 18,
        status: true,
        },
        {
        _id: "5fc60507115bde47d0eef5c2",
        id_category: "5fbbaf4cc90edd1be885b32b",
        name: "Áo Thu Đông",
        price: 15,
        id_brand: "5fbbafc8c90edd1be885b32d",
        img: "https://res.cloudinary.com/dpa6e5lwv/image/upload/v1606812934/xihxcdcq3j6tftsxbibu.jpg",
        description: "Chất Thun Cotton dày dặn Tông Màu Pastel Cực kỳ sang trọng Mỗi Áo được đóng trong 1 túi zip sang trọng. Không xù lông, co dãn tốt Dùng để mặc ngoài hoặc mặc trong áo khoác, áo thích hợp mặc đơn vào mùa thu, và mặng trong vào mùa đông. chất đẹp không sợ bị sổ lông, không xù Freesize cho các bạn dưới 58kg nha Màu sắc có thể hơi khác 1 chút do ánh sáng khi chụp. nhưng các bạn yên tâm, tông màu pastel cực kỳ sang",
        color: "Gray",
        size: "M",
        count: 15,
        status: true,
        },
        {
        _id: "5fc6053f115bde47d0eef5c3",
        id_category: "5fbbaf4cc90edd1be885b32b",
        name: "Đầm Váy Nữ",
        price: 9,
        id_brand: "5fbbafc8c90edd1be885b32d",
        img: "https://res.cloudinary.com/dpa6e5lwv/image/upload/v1606812990/fjtif6xwrbtvgjvn7eqm.jpg",
        description: "Thiết kế theo hơi hướng Thiết kế tinh tế đến từng đường may, chất liệu mềm mại. Chất liệu sản phẩm kate lụa 2 lớp, có túi tôn dáng cực chuẩn. Phong cách trẻ trung, thanh lịch, sang trọng, , giúp bạn tự tin tỏa sáng khi xuất hiện. Tôn vinh thần thái, vẻ đẹp thanh lịch hiện đại, toát được nét dịu dàng, nữ tính vốn có của mình.",
        color: "Gray",
        size: "M",
        count: 19,
        status: true,
        }
     ]

    return (
        <div>
            <div className="product-view">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="product-view-top">
                                        <div className="row">

                                            <div className="col-md-3">
                                                <div className="product-short">
                                                    <div className="dropdown">
                                                        <div className="dropdown-toggle" data-toggle="dropdown">Product short by</div>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link to="#" className="dropdown-item">Newest</Link>
                                                            <Link to="#" className="dropdown-item">Popular</Link>
                                                            <Link to="#" className="dropdown-item">Most sale</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="product-price-range">
                                                    <div className="dropdown">
                                                    <div className="dropdown-toggle" data-toggle="dropdown">Product price range</div>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link to="#" className="dropdown-item">$0 to $50</Link>
                                                            <Link to="#" className="dropdown-item">$51 to $100</Link>
                                                            <Link to="#" className="dropdown-item">$101 to $150</Link>
                                                            <Link to="#" className="dropdown-item">$151 to $200</Link>
                                                            <Link to="#" className="dropdown-item">$201 to $250</Link>
                                                            <Link to="#" className="dropdown-item">$251 to $300</Link>
                                                            <Link to="#" className="dropdown-item">$301 to $350</Link>
                                                            <Link to="#" className="dropdown-item">$351 to $400</Link>
                                                            <Link to="#"className="dropdown-item">$401 to $450</Link>
                                                            <Link to="#" className="dropdown-item">$451 to $500</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*   List products từ mảng trên   */
                                    products.map((product) =>

                                        <div className="col-md-3" key={product._id}>
                                            <div className="product-item">
                                                <div className="product-title">
                                                    <Link to="/">{product.name}</Link>
                                                    <div className="ratting">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                </div>
                                                <div className="product-image">
                                                        <img src={product.img} alt="Product" />
                                                        <div className="product-action">
                                                            <Link to="/"><i className="fas fa-eye" /></Link>             
                                                        </div>
                                                </div>
                                                <div className="product-price">
                                                <h3><span>$</span>{product.price}</h3>
                                                {
                                                
                                                    <a className="btn" > <i className="fa fa-shopping-cart"></i>Buy Now</a>
                                                }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                
                            </div>
                            {/* Pagination Start */}
                            <div className="col-md-12">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <Link className="page-link" to="#" tabIndex={-1}>Previous</Link>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">Next</Link>
                                    </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* Pagination Start */}
                        </div>           
                    
                    </div>
                    {/* Side Bar End */}
                </div>
            </div>
    </div>
            
    )
    
};

export default Product;