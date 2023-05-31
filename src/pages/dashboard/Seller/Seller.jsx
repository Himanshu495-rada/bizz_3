import React, { useState, useEffect } from 'react'
import PocketBase from 'pocketbase';
import { Card, Row, Col, Container, Modal, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Seller.css';
import { ToastContainer, toast } from 'react-toastify';
import marketingImg from '../../../assets/busy-marketing.svg';


function Seller() {

  const pb = new PocketBase(process.env.REACT_APP_URL);
  const navigate = useNavigate();



  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  function handleShow3(product) {
    setDetails(product);
    setShow3(true);
  }
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [features, setFeatures] = useState('');
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState({
    id: '',
    name: '',
    description: '',
    price: 0,
    image: null,
    category: '',
    features: '',
    qty: 0,
  })
  const qty = 0;

  const logout = () => {
    pb.authStore.clear();
    navigate('/');
  }


  async function addProduct() {
    if (name === "" || description === "" || price === "" || image === null || category === "" || features === "") {
      console.log('empty');
    } else {
      const formdata = new FormData();
      formdata.append('name', name);
      formdata.append('description', description);
      formdata.append('price', price);
      formdata.append('image', image);
      formdata.append('category', category);
      formdata.append('features', features);
      formdata.append('qty', qty);
      const record = await pb.collection('products').create(formdata);
      if (record) {
        toast("Product added succesfully 🥳");
        setName('');
        setDescription('');
        setPrice(0);
        setImage(null);
        setCategory('');
        setFeatures('');
        setShow(false);
        getProducts();
      }
    }
  }

  async function deleteProduct(id) {
    const record = await pb.collection('products').delete(id);
    if (record) {
      toast("Product deleted succesfully 😢");
      getProducts();
    }
  }

  function searchProducts() {
    navigate('/products');
  }

  async function getProducts() {
    const records = await pb.collection('products').getFullList({
      sort: '-created',
    });
    setProducts(records);
  }

  function handleProductDescription(id) {
    navigate(`/productdescription/${id}`);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <div className="d-flex justify-content-center mt-4">
        <div></div>
        <h1>Seller Dashboard</h1>
      </div>
      <div>
        <Row>
          <Col lg={6}>
            <div style={{ marginTop: "180px" }} >
              <h3>Add and manage your products</h3>
              <p>Get closer to your sale by adding products, or import your existing products inventory.</p>
              <div style={{ flexDirection: 'row' }} >
                <button className='btn btn-outline-primary' onClick={() => setShow(true)} >Add product</button>
                <button className='btn btn-outline-secondary ms-4' onClick={searchProducts} >Search products</button>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <img src={marketingImg} alt="marketing" style={{ width: '100%' }} />
          </Col>
        </Row>
      </div>
      <div className='my-5' >
        <h3>All listed products</h3>
        <ListGroup>
          {products.map((product) => (
            <ListGroup.Item key={product.id} >
              <div className='d-flex productDetail' >
                <img src={process.env.REACT_APP_URL + "/api/files/products/" + product.id + "/" + product.image} style={{ width: "100px", height: "100px" }} onClick={() => handleProductDescription(product.id)} />
                <div className='mx-3'>
                  <h5>{product.name}</h5>
                  <p>₹{product.price}</p>
                </div>
                <div className='ms-auto' >
                  <button className='btn btn-outline-primary' onClick={() => { setDetails(product); setShow2(true) }} >Edit</button>
                  <button className='btn btn-outline-danger ms-3' onClick={() => handleShow3(product)} >Delete</button>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      <ToastContainer />

      <Modal show={show} onHide={() => setShow(false)} >
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="formContainer" >
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' value={name} onChange={(e) => { setName(e.target.value) }} />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
            <label htmlFor="img">Image</label>
            <input type="file" id="img" name="img" onChange={(e) => { setImage(e.target.files[0]) }} />
            <label htmlFor="category">Category</label>
            <input type="text" id="category" name="category" value={category} onChange={(e) => { setCategory(e.target.value) }} />
            <label htmlFor="features">Features</label>
            <input type="text" id="features" name="features" value={features} onChange={(e) => { setFeatures(e.target.value) }} />
            <button className='btn btn-primary mt-3' onClick={addProduct} >Add Product</button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={show2} onHide={() => setShow2(false)} >
        <Modal.Header closeButton>
          <Modal.Title>Edit product details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="formContainer" >
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' value={details.name} onChange={(e) => { setName(e.target.value) }} />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" value={details.description} onChange={(e) => { setDescription(e.target.value) }} />
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" value={details.price} onChange={(e) => { setPrice(e.target.value) }} />
            <label htmlFor="img">Image</label>
            <input type="file" id="img" name="img" onChange={(e) => { setImage(e.target.files[0]) }} />
            <label htmlFor="category">Category</label>
            <input type="text" id="category" name="category" value={details.category} onChange={(e) => { setCategory(e.target.value) }} />
            <label htmlFor="features">Features</label>
            <input type="text" id="features" name="features" value={details.features} onChange={(e) => { setFeatures(e.target.value) }} />
            <button className='btn btn-primary mt-3' onClick={addProduct} >Add Product</button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={show3} onHide={() => setShow3(false)} >
        <Modal.Header closeButton>
          <Modal.Title>Please confirm you want to delete this product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex justify-content-center align-items-center flex-column' >
            <img src={process.env.REACT_APP_URL + "/api/files/products/" + details.id + "/" + details.image} style={{ width: "200px", height: "200px" }} />
            <h5>{details.name}</h5>
            <p>₹{details.price}</p>
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center align-items-center'  >
          <button className='btn btn-danger' onClick={() => deleteProduct(details.id)} >Delete</button>
        </Modal.Footer>
      </Modal>

    </Container>

  )
}

export default Seller;
