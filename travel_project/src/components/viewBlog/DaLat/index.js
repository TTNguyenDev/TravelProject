import React, { Component } from 'react';
import { compose } from 'recompose';
import { withFirebase } from '../../Firebase';
import { withAuthorization } from '../../Session';
import Background from '../../Img/Destination/DaLatBlog.jpg'
import { Button, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import dalat1 from '../../Img/destination-promotion/dalat1.jpg'
import * as ROUTES from '../../../constants/routes';

const Style = styled.div`
    .Imgbackground{
        background-image: url(${Background});  
        width: 100%;
        min-height: 100vh;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
        /* Needed to position the navbar */
        position: relative;
    }
    .resizeImg{
        height: 150px;
        width: 150px;
        border: none;
    }
    .Title{
        text-decoration: underline;
        text-decoration-color: red;
        color: red;
        font-size : 75px;
        font-weight:bold;
    }
    .resizeRow{
        width: 50%;
    }
`;

const DaLatViewBlog = () => (
    <div>
    <Style>
        <div className="Imgbackground">
            <br></br><br></br><br></br>
            <center className="Title">Đà Lạt blog</center>
            <center>
                <Blogs />
            </center>
        </div>
    </Style>
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
        
        this.props.firebase.blogs('da_lat').on('value', snapshot => {
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
   
        <Style>
            <Row className="ml-5 mr-5 bg-light resizeRow">

                <Button variant="link" href={ROUTES.DL_DETAIL+ blog.uid}>
                    <img src={dalat1} class="resizeImg" ></img>
                </Button>

                <Col className="mt-4">
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </Col>
            </Row>
            <br></br>
        </Style>
   
);

export default DaLatViewBlog;

