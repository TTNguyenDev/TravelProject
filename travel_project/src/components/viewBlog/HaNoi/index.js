import React, { Component } from 'react';
import { compose } from 'recompose';
import { withFirebase } from '../../Firebase';
import { withAuthorization } from '../../Session';
import Background from '../../Img/Destination/HaNoi.jpg'
import { ButtonToolbar, Button, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import * as ROUTES from '../../../constants/routes';

const Style = styled.div`
    .Imgbackground{
        background-image: url(${Background});  
        width: 100%;
        height:100vh;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
        /* Needed to position the navbar */
        position: relative;
    }
`;

const HaNoiViewBlog = () => (
    <div>
          <Blogs />
        {/* <Style>
            <div className="Imgbackground">
               
            </div>
        </Style> */}
       
    </div>
);

class BlogsBase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            blogs: [],
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        
        this.props.firebase.blogs('ha_noi').on('value', snapshot => {
            const blogObject = snapshot.val();

            if (blogObject) {
                //convert to blogs from snapshot
                const blogList = Object.keys(blogObject).map(key => ({...blogObject[key],
                uid: key,
            }));
                this.setState({
                    loading: false,
                    blogs: blogList,
                });
            } else {
                this.setState({ blog: null, loading: false});
            }  
        });
    }

    componentWillUnmount() {
        //avoid memory leaks
        this.props.firebase.blogs().off();
    }

    render() {
        const { blogs, loading } = this.state;

        return (
            <div>
                {loading && <div>Loading ...</div>}
                {blogs ? (
                     <BlogList blogs={blogs}/>
                ) : (
                    <div>There are no blogs ...</div>
                )}
            </div>
        );
    }
}

const Blogs = withFirebase(BlogsBase);

const BlogList = ({blogs}) => (
    <ul>
        {blogs.map(blog => (
            <BlogItem key={blog.uid} blog={blog}/>
        ))}
    </ul>
);

const BlogItem = ({blog}) => (
    <li>
        <strong>{blog.title}</strong> {blog.content}
    </li>
);

export default HaNoiViewBlog;
