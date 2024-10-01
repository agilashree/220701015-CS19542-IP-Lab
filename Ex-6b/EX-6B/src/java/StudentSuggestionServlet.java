import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class StudentSuggestionServlet extends HttpServlet {
    // Array of student names
    private final String[] students = {
        "Afrin Fathima I", "Agila Shree A", "Ash", "Aishwarya C",
        "Amrutha B J", "Arthey", "Ashmita", "Blessy Abidha B S",
        "Caroline Suja J S", "Deepiga Dharshini C", "Dhanasree L P",
        "Preneshiya.V", "Yashika", "Ajitha", "Anu", "Moshika", "Nandhini","Vishruthi","krishika","Amir","VidhyaSahar",
        "Vijay","Surya","Np","Harshath","Sidhu","Varun","Tej","Kavya","Vikram","Tony Stark","Arav","Thanos"
    };

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Get the query parameter from the request
        String query = request.getParameter("query");

        // Set the response content type
        response.setContentType("text/html;charset=UTF-8");
        
        try (PrintWriter out = response.getWriter()) {
            // If the query is not null and not empty
            if (query != null && !query.trim().isEmpty()) {
                // Convert the query to lowercase for case-insensitive comparison
                String lowerCaseQuery = query.toLowerCase();

                // Loop through the student names
                for (String student : students) {
                    // Check if the student name starts with the query (case insensitive)
                    if (student.toLowerCase().startsWith(lowerCaseQuery)) {
                        // Output the matching student name wrapped in a div
                        out.println("<div onclick='fillInput(\"" + student + "\")'>" + student + "</div>");
                    }
                }
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // For simplicity, we will not use POST in this example
        doGet(request, response);
    }

    @Override
    public String getServletInfo() {
        return "StudentSuggestionServlet provides student name suggestions based on input.";
    }
}
