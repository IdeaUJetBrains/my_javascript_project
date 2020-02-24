package server.server_part_jax_rs.test_resources;


import javax.ws.rs.*;

@Produces("application/json")
@Path("jaxrs_class_path_vars")
public class Paths_via_vars {

    private static final String PATH_SECTION_VAR1 = "var1";

    @GET
    @Path(PATH_SECTION_VAR1)
    public String get1() {  return "test";   }

    @GET
    @Path(PATH_SECTION_VAR1 + "var2")
    public String get2() {  return "test";   }

    @GET
    @Path(PATH_SECTION_VAR1 + "/var2")
    public String get3() {  return "test";   }
}
