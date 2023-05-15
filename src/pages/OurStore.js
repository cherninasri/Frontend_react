import React, { useState,useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import { getAllCategories, getAllData, getAllProductxCategory, getPageProducts } from "../redux/testSlice";
import { useDispatch ,useSelector} from "react-redux";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/pagination";
import Header from "../components/Header";
import Footer from './../components/Footer';


const OurStore = () => {
  const [grid, setGrid] = useState(4);

  const dispatch =useDispatch()
  const data=useSelector(state=>state.test.data)
  const categoryData=useSelector(state=>state.test.categoryData)

  


  let page=0;



  if (data.paginationResult){
    page=data.paginationResult
  }
  

  const onPress =(num)=>{
    dispatch( getPageProducts(num))
  }
  const onSelectCategory =async (e)=>{

    console.log(e.target.value)
     

    localStorage.setItem("searchWord", e.target.value)

    if(e.target.value=="0"){
     await dispatch(getAllData())

    }else
    
   { await dispatch(getAllProductxCategory(e.target.value));
  
  }

    




 }


  
 
 

useEffect(()=>{
   
  dispatch(getAllData())
  dispatch(getAllCategories())
  
},[])
 
  return (
    <>
    
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Top 3 Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title"> Top 3 Products</h3>
              <div>
                <h5 className="sub-title">Availablity</h5>
                <div>

                
                </div>
                <h5 className="sub-title">Price</h5>
               
                  
                <h5 className="sub-title">Size</h5>
              
              </div>
            </div>
           
            
              
           
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "80px" }}>
                    Catrgories:
                  </p>
                  <select
                    name=""
                    defaultValue={"manula"}
                    className="form-control form-select"
                    id=""
                    onChange={onSelectCategory}
                  >
                    <option value="0"> Products</option>
                    {categoryData ? categoryData.map((item) => {
                      return (<option key={item._id} value={item._id}>{item.name}</option>
                      )
                        
                    }) : <h1>no data</h1>}
                   
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-8 flex-wrap">
              {data.data ? data.data.map((item) => {
                return (
                  <div className="col-3">
                  <BlogCard item={item} />
                </div>)
                  
              }) : <h1>no data</h1>}
              
              </div>
              <Pagination page={page} Onpress={onPress} />
            </div>
          </div>
        </div>
      </Container>
   
    </>
  );
};

export default OurStore;
