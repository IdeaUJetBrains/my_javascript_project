package server.microprofile;



import io.micronaut.http.client.multipart.MultipartBody;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;
import org.jboss.resteasy.annotations.providers.multipart.MultipartForm;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/jaxrs_class_ann_concat/concat_part/")
@RegisterRestClient
public interface Microprofile_MultipartService_jax_res_ann_concat_test {

    @POST
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces(MediaType.TEXT_PLAIN)
    String sendMultipartData(@MultipartForm MultipartBody data);

}