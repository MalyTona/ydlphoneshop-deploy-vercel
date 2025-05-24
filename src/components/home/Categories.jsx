import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"; // Removed Card as we'll use a div with .category-box
import AppURL from "../../api/AppURL";
import axios from "axios";
import { Link } from "react-router-dom";
import CategoryLoading from "../PlaceHolder/CategoryLoading"; // Assuming this is a functional component

const Categories = () => {
  const [menuData, setMenuData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(AppURL.AllCategoryDetails);
        setMenuData(response.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (isLoading) {
    return <CategoryLoading isLoading={true} />; // Or simply <CategoryLoading /> if it handles its own state internally
  }

  if (error) {
    return (
      <Container className="text-center py-5">
        <p>Error loading categories. Please try again later.</p>
      </Container>
    );
  }

  if (menuData.length === 0) {
    return (
      <Container className="text-center py-5">
        <div className="section-title text-center mb-4">
          {" "}
          {/* Adjusted margin for consistency */}
          <h2 className="text-gradient">CATEGORIES</h2>
        </div>
        <p>No categories found.</p>
      </Container>
    );
  }

  return (
    <Fragment>
      <div className={isLoading ? "d-none" : ""}>
        {" "}
        {/* Old way of hiding, can be removed if using above conditional rendering */}
        <Container className="text-center py-4" fluid={true}>
          <div className="section-title text-center mb-4">
            {" "}
            {/* Adjusted margin */}
            <h2 className="text-gradient">CATEGORIES</h2>
            <p>Some of Our Exclusive Collection, You May Like</p>
          </div>

          <Row className="justify-content-center">
            {menuData.map((categoryItem, i) => (
              <Col
                key={categoryItem.id || i.toString()} // Prefer a unique ID from data if available
                xl={2}
                lg={3}
                md={4}
                sm={6}
                xs={6} // Adjusted grid for potentially more categories per row
                className="mb-4 px-2" // Spacing classes
              >
                <Link
                  className="text-link" // Ensure this class doesn't add conflicting styles
                  to={"/productcategory/" + categoryItem.category_name}
                >
                  <div className="category-box">
                    {" "}
                    {/* This div gets all the .category-box styles */}
                    <img
                      src={categoryItem.category_image}
                      alt={categoryItem.category_name}
                    />
                    <h3>{categoryItem.category_name}</h3>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Categories;
