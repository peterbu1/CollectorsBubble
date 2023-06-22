package view;

// classes imported from java.sql.*
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import model.carPost.*;

// classes in my project
import dbUtils.*;

public class CarPostView {

    public static StringDataList getAllPost(DbConn dbc) {

        // sdl will be an empty array and DbError with "" 
        StringDataList sdl = new StringDataList(); 
        
        // sd will have all of it's fields initialized to ""
        StringData sd = new StringData();
        
        try {
            String sql = "SELECT post_ID, car_model, car_year, car_price, user_rating, car_pic, web_user.web_user_id "
                    + "FROM car_post, web_user " 
                    + "WHERE car_post.web_user_id = web_user.web_user_id "
                    + "ORDER BY web_user_id; ";
                    
              
            
            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            ResultSet results = stmt.executeQuery();

            while (results.next()) {
                
                sd = new StringData();
                
                // the formatUtils methods do not throw exceptions, but if they find illegal data, they write 
                // a message right in the field that they are trying to format.

                // plainInteger returns integer converted to string with no commas.
                sd.webUserId = FormatUtils.plainInteger(results.getObject("web_user_id"));
                sd.postID = FormatUtils.formatInteger(results.getObject("post_ID"));
                sd.carModel = FormatUtils.formatString(results.getObject("car_model"));
                sd.carYear = FormatUtils.plainInteger(results.getObject("car_year"));               
                sd.carPrice = FormatUtils.formatDollar(results.getObject("car_price"));
                sd.userRating = FormatUtils.formatInteger(results.getObject("user_Rating"));
                sd.carPic = FormatUtils.formatString(results.getObject("car_pic"));
                              
                sdl.add(sd);
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            sd.errorMsg = "Exception thrown in WebUserView.getAllUsers(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;
    }
}