package servidorJSON;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public final class ficheroDatos {

    public static String muestraContenido(String archivo) throws FileNotFoundException, IOException {
        String cadena;
        String contenido = "";
        
        FileReader f = new FileReader(archivo);
        BufferedReader b = new BufferedReader(f);
        while((cadena = b.readLine())!=null) {
        	if (cadena!= null){
        		contenido += cadena;
        	}
        }
        b.close();
        System.out.println(contenido);
        
        return contenido;
    }
 
}
