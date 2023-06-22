const AjaxCarTable = () => {           
  
    // Tell React that items array is something that
    // (when changed) should redisplay on the page.
    // Set items initial value to [], an empty array.
    const [items, setItems] = React.useState([]);

    // Tell React that if "error" changes, redisplay.
    // Set initial value of error to null.
    const [error, setError] = React.useState(null);

    // useEffect second parameter is an array of elements that 
    // (if they change) should trigger the function specified 
    // as the first useEffect parameter.
    React.useEffect(() => {
        
            ajax_alt("webAPIs/listOtherAPI.jsp",
            
            function (obj) {        // success function gets obj already run thru JSON.parse
                if (obj.dbError.length > 0) {
                    setError(obj.dbError);
                } else {
                    setItems(obj.carPostList);
                    setError("");
                }
            }, 
            
            function (msg) {   // failure message gets error message
                setError(msg);
            }
        );
    }, []);
    
    
    const CarTable = ({list}) => {
        return (
            <div className="clickSort">
                <h2>Car List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Car Model</th>
                            <th className="alignRight">Car Year</th>
                            <th className="alignRight">Car Price</th>
                            <th className="alignRight">User Rating</th>
                            <th>ID</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map(listObj => 
                                <tr key={listObj.postID}>
                                    <td><img className="userImg" src={listObj.carPic}/></td>
                                    <td>{listObj.carModel}</td>
                                    <td className="alignRight">{listObj.carYear}</td>
                                    <td className="alignRight">{listObj.carPrice}</td>
                                    <td className="alignRight">{listObj.userRating}</td> 
                                    <td>{listObj.webUserId}</td>
                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div>
            { error ?  <div>Error: {error} </div> : <CarTable list={items} /> }
        </div>
    );
}; // class AjaxCarTable


// Sample User from the JSON file.
/*
      "webUserId": "1",
      "userEmail": "sallyk",
      "userPassword": "p",
      "image": "http://cis-linux2.temple.edu/~sallyk/pics_/sk_2017.jpg",
      "birthday": "",
      "membershipFee": "$123.45",
      "userRoleId": "2",
      "userRoleType": "Edit",
      "errorMsg": ""
 */