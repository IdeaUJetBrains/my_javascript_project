package server.server_part_jax_rs.test_resources;


import javax.ws.rs.*;

@Produces("application/json")
@Path("jaxrs_class_path_simple")
public class jaxrs_Paths_simple {
    @GET
    @Path(value = "/ref1")
    public String get1() {  return "test";   }

    @GET
    @Path(value = "/ref1/section2")
    public String get2() {  return "test";   }

    @GET
    @Path(value = "/ref1/section2/section3/")
    public String get3() {  return "test";   }

    @GET
    @Path(value = "/ref1/section2/section3/section4")
    public String get4() {  return "test";   }

}
