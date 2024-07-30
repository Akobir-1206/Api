// import { Image, Table } from 'antd';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { render } from 'react-dom';

// export default function Home() {
//     const [user, setUser] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [photo, setPhoto] = useState([]);

//     const getUser = () => {
//         setLoading(true);
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then(data => setUser(data?.data))
//             .catch(err => console.log(err))
//             .finally(() => setLoading(false));
//     };
     
//     const getPhoto = () => {
//         setLoading(true);
//         axios.get('https://jsonplaceholder.typicode.com/photos')
//             .then(data => setPhoto(data?.data))
//             .catch(err => console.log(err))
//             .finally(() => setLoading(false));
//     };

//     useEffect(() => {
//         getUser();
//         getPhoto();
//     }, []);

//     const columns = [
//         {
//             title: 'id',
//             dataIndex: 'id',
//             key: 'id',
//         },
//         {
//             title: 'Text',
//             dataIndex: 'title', 
//             key: 'title',
//         },
//         {
//             title: 'Image',
//             dataIndex: 'image_src',
//             key: 'image_src',
//             render: (thumbnailUrl) =>(
//                 <img
//                  src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${image_src}`} 
//                  alt="City" />
//                 //  style={{width: '100px'}}
//             )


//         }
//     ];

//     const dataSource = user.map((item, index) => ({
//         key: index,
//         id: item.id,
//         title: item.title,
//         image: (
//             <Image
//             width={100}
//             height={100}
//             src={thumbnailUrl}
//             alt={city.text}
//             />
//         )

//     }));

//     return (
//         <div>
//             <Table dataSource={dataSource} columns={columns} loading={loading} />;
//         </div>
//     );
// }


import { Image, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Home() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [photo, setPhoto] = useState([]);

    const getUser = () => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(data => setUser(data?.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    };
     
    const getPhoto = () => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(data => setPhoto(data?.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        getUser();
        getPhoto();
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Text',
            dataIndex: 'title', 
            key: 'title',
        },
        {
            title: 'Image',
            dataIndex: 'thumbnailUrl',
            key: 'thumbnailUrl',
            render: (thumbnailUrl) => (
                <Image
                    width={150}
                    height={150}
                    src={thumbnailUrl}
                    alt="City"
                />
            )
        }
    ];

    const dataSource = user.map((item, index) => ({
        key: index,
        id: item.id,
        title: item.title,
        thumbnailUrl: photo[index] ? photo[index].thumbnailUrl : ''

    }));

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} loading={loading} />
        </div>
    );
}

