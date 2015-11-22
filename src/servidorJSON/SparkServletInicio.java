package servidorJSON;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.staticFileLocation;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Iterator;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import spark.Request;
import spark.Response;
import spark.Route;

import org.eclipse.jetty.util.log.*;


public class SparkServletInicio {
  public static void main(String[] args) {
    	port(8082);
    	//staticFileLocation("/WebContent");
    	
    	String directory = "C:/Users/Paco/workspace/MegafundWeb/WebContent/";
    	String ficheros = "C:/Users/Paco/Documents/DatosPruebas/";
    	
    	Log.getRootLogger().info("Using Log ", new Object[]{});
    	
     	get("/*", new Route() {
			public Object handle(Request request, Response response) throws Exception {
				String pathInfo = request.pathInfo();
				
				if ( pathInfo.equals("/cartera"))
				{
					response.type("application/json");
					return ficheroDatos.muestraContenido(ficheros + "Megafund.csv");	
				}
				else if ( pathInfo.equals("/cartera2"))
				{
					response.type("application/json");
					return ficheroDatos.muestraContenido(ficheros + "Megafund2.csv"); 
				}
				else if ( pathInfo.equals("/grafica"))
				{
					response.type("application/json");
					return ficheroDatos.muestraContenido(ficheros + "grafica.txt"); 
				}
				else if ( pathInfo.equals("/grafica2"))
				{
					response.type("application/json");
					return ficheroDatos.muestraContenido(ficheros + "grafica2.txt"); 
				}
				else if ( pathInfo.equals("/rentabilidad"))
				{
					response.type("application/json");
					return ficheroDatos.muestraContenido(ficheros + "Rentabilidad.csv"); 	
				}
				else
				{
					return ficheroDatos.muestraContenido(directory+request.pathInfo());
				}
			}
		}); 
      }
}