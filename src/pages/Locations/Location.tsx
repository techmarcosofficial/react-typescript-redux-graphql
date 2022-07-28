import React from "react";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useQuery } from "@apollo/client";
import Header from "../../components/layout/Header/Header";
import { GET_LOCATION } from "../../graphql/query";

const Location = ({ location }: any) => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_LOCATION, {
    variables: { id }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{JSON.stringify(error, null, 2)}</p>;

//   console.log('locations!!!!!!!!!!!!!!!!');
//   console.log(data.location);
  
  return (
    <>
      <Header />
      <div className="bg-indigo-100 py-6 md:py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <div className="row">
              <p>ID : {data.location && data.location.id}</p>
              <p>Title: {data.location && data.location.name}</p>
              <p>Image: {data.location && <img src={data.location.photo} height="200" width="200" alt="" />}</p>
              <p>Desc: {data.location && data.location.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Location.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   location: PropTypes.object,
}

const mapStateToProps = (state: any) => ({
  // ... computed data from state and optionally ownProps
//   loading: state.post.loading,
//   location: state.location.location,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);