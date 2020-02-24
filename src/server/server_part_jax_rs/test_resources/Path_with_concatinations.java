package server.server_part_jax_rs.test_resources;

import javax.ws.rs.*;

@Path("jaxrs_class_path_with_concat")
public class Path_with_concatinations {

    @GET
    @Path("/c1_changed")
    public String get2() {  return "test";   }

    @GET
    @Path("/c1_changed" + "/c2")
    public String get1() {  return "test";   }




//
//    @POST
//    @Path("test2" + "/test1")
//    public String get2() {  return "test";   }
//
//    @POST
//    @Path("test_2")
//    public String get20() {  return "test";   }
//
//    @POST
//    @Path(value = PATH_SECTION_OP2 + "/test2_second_section_1")
//    public String get21() {  return "test";   }
//
//    @POST
//    @Path("test2" + "/test2_second_section_2")
//    public String get22() {  return "test";   }
//
//    @PUT
//    @Path("/")
//    public String get3() {  return "test";   }


//    bug  IDEA-231162
/*
    @GET
    @Path("/<cursor>/any_section_name")
    public String get11() {  return "test";   }

    @GET
    @Path("//<cursor>any_section_name")
    public String get12() {  return "test";   }

    @GET
    @Path("/op1/one_more_section1/" + "/<cursor>one_more_section2")
    public String get13() {  return "test";   }


    @GET
    @Path("/op1/one_more_section1//<cursor>one_more_section2")
    public String get14() {  return "test";   }*/

}
