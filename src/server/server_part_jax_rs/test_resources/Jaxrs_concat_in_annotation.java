package server.server_part_jax_rs.test_resources;


import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Produces("application/json")
@Path("jaxrs_class_ann_concat/" + "concat_part")
public class Jaxrs_concat_in_annotation {
    @GET
    @Path(value = "/ref1")
    public String get1() {  return "test";   }

}
