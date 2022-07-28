import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useQuery } from "@apollo/client";
import Header from "../../components/layout/Header/Header";
// import { getPosts } from "../../services/postService";
// import { postsAction } from "../../redux/actions";
import { GET_LOCATIONS } from "../../graphql/query";

const Locations = (props: any) => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  
//   console.log('locations!!!!!!!!!!!!!!!!');
//   console.log(data.locations);
  
  return (
    <>
      <Header />
      <div className="bg-indigo-100 py-6 md:py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-2">Locations List</h2>
              <ul>
                {data.locations &&
                  data.locations.map(
                    (location: any) => <li key={location.id}>
                      <Link to={`/locations/${location.id}`}>{location.name}</Link></li>)
                }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

Locations.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   locations: PropTypes.array,
}

const mapStateToProps = (state: any) => ({
  // ... computed data from state and optionally ownProps
//   loading: state.post.loading,
//   locations: state.location.locations,
})

const mapDispatchToProps = (dispatch: any) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations);