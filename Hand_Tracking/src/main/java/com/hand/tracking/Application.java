package com.hand.tracking;

import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.Scanner;

@SpringBootApplication
@CrossOrigin
public class Application {

	static String Version = "";
	public static void main (String[]args) throws Exception {
		SpringApplication.run(Application.class, args);
	}
//	@Bean
//	public PropertyPlaceholderConfigurer properties () throws Exception {
//		final PropertyPlaceholderConfigurer ppc = new PropertyPlaceholderConfigurer();
//		System.err.println("creating External Config");
//		CreateExternalPropertyFile();
//		Properties prop = intializeSettings("application.properties", false, false);
//
//		ppc.setIgnoreResourceNotFound(true);
//		final List<Resource> resourceLst = new ArrayList<Resource>();
//		String homePath = System.getProperty("user.home");
//		ppc.setProperties(prop);
//		// resourceLst.add(new ClassPathResource("Paging.properties"));
//		ppc.setLocations(resourceLst.toArray(new Resource[]{}));
//		return ppc;
//	}
//
//	public static void CreateExternalPropertyFile () {
//		try {
//			final String[] listOfPropertiesFiles = new String[]{"application.properties"};
//
//			String path = System.getProperty("user.home") + "/.SubscribeConfig";
//			System.out.println(path);
//			File file = new File(path);
//			if (!file.exists()) {
//				Path pathToCreate = Paths.get(path);
//				Files.createDirectories(pathToCreate);
//			}
//			for (String f : listOfPropertiesFiles) {
//				path = System.getProperty("user.home") + "/.SubscribeConfig/." + f;
//				file = new File(path);
//				if (!file.exists()) {
//					file.createNewFile();
//				}
//			}
//
//
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//	}
//	public static Properties intializeSettings (String PropertyFileName,boolean EscapeCopyOut,
//												boolean IgnoreHomeResourceFile) throws Exception {
//
//
//		Properties props = new Properties();
//		Properties propsToWrite = null;
//		InputStream input = Application.class.getClassLoader().getResourceAsStream(PropertyFileName);
//		if (input == null) {
//			System.out.println("Resource File " + PropertyFileName + " can't be Loaded");
//		}
//
//		if (input != null) {
//			props.load(input);
//			propsToWrite = new Properties();
//			Properties oldProps = new Properties();
//			File f = null;
//			if (IgnoreHomeResourceFile == false) {
//				String path = System.getProperty("user.home") + "/.SubscribeConfig/." + PropertyFileName;
//				f = new File(path);
//				if (f.exists()) {
//					oldProps.load(new FileInputStream(f));
//				}
//			}
//
//			for (Object property : props.keySet()) {
//
//				String properyName = property.toString().replaceAll("\\[", "").replaceAll("\\]", "");
//				Object properyValue;
//				if (System.getenv(properyName) != null) {
//					properyValue = System.getenv(properyName);
//
//				} else {
//					if (oldProps.get(property) != null
//							&& property.toString().startsWith("pom.") == false
//							&& property.toString().startsWith("ImpExp.version") == false
//					) {
//						properyValue = oldProps.get(property);
//					} else {
//						properyValue = props.get(property);
//						if (property.toString().equals("pom.version")) {
//							Version = (String) props.get(property);
//						}
//					}
//				}
//				////Dev-00003395 : extract the encrypted value for the password
//				String properyValuestr = properyValue.toString();
//				if (property.toString().toLowerCase().contains("password")) {
//					int start = properyValuestr.toLowerCase().indexOf("enc(");
//					int end = properyValuestr.lastIndexOf(")");
//					if (start > -1 && end > 0) {
//
//						if (properyValuestr.trim().startsWith("${") && properyValuestr.trim().endsWith("}") && properyValuestr.contains(":")) {
//							int index = properyValuestr.indexOf(":");
//							String FirstPart = properyValuestr.substring(0, index + 1);
//
//							properyValuestr = properyValuestr.substring(start + 4, end);
//
//							properyValue = FirstPart + NTGEncryptor.decrypt(properyValuestr) + "}";
//						} else {
//
//							properyValuestr = properyValuestr.substring(start + 4, end);
//							properyValue = NTGEncryptor.decrypt(properyValuestr);
//						}
//					}
//				}
//				propsToWrite.put(property, properyValue);
//
//				if (properyName.equals("app.instance-id")) {
//					if (propsToWrite.get(properyName).equals("${random.uuid}")) {
//						propsToWrite.put(properyName, "BE-" + java.util.UUID.randomUUID());
//					}
//				}
//
//			}
//			// write into it
//			if (EscapeCopyOut == false) {
//				StoreTheNewPropertiyFile(propsToWrite, PropertyFileName, f);
//			}
//
//			Object[] keys = propsToWrite.keySet().toArray();
//			for (Object k : keys) {
//				String v = (String) propsToWrite.get(k);
//				System.setProperty((String) k, v);
//			}
//
//		}
//
//		return propsToWrite;
//	}
//	public static void StoreTheNewPropertiyFile (Properties propsToWrite, String PropertyFileName, File f) throws
//			Exception {
//
//		InputStream in = Application.class.getClassLoader().getResourceAsStream(PropertyFileName);
//		Scanner inp = new Scanner(in);
//		FileWriter wr = new FileWriter(f);
//		while (inp.hasNextLine()) {
//			String line = inp.nextLine().trim();
//
//			if (line.indexOf("=") > 0 && line.startsWith("#") == false) {
//				String[] list = line.split("=");
//				//find value from the propert
//				String Key = list[0].trim();
//				Object newValue = propsToWrite.get(Key);
//
//				String ValueStr = (newValue == null || newValue.equals("null") ? "" : newValue.toString());
//
//				////Dev-00003395 : extract the encrypted value for the password
//
//				if (Key.toLowerCase().contains("password")) {
//					int start = ValueStr.toLowerCase().indexOf("enc(");
//					int end = ValueStr.lastIndexOf(")");
//					if (start < 0 || end < 0) {
//						if (ValueStr.trim().startsWith("${") && ValueStr.trim().endsWith("}") && ValueStr.contains(":")) {
//							int index = ValueStr.indexOf(":");
//							int LastIndex = ValueStr.indexOf("}");
//							String FirstPart = ValueStr.substring(0, index + 1);
//							String SecondPart = ValueStr.substring(index + 1, LastIndex);
//							ValueStr = FirstPart + "Enc(" + NTGEncryptor.encrypt(SecondPart) + ")}";
//						} else {
//							ValueStr = "Enc(" + NTGEncryptor.encrypt(ValueStr) + ")";
//						}
//					}
//				}
//
//				line = Key + "=" + ValueStr;
//			}
//			wr.write(line);
//			wr.write("\r\n");
//		}
//		wr.close();
//		inp.close();
//		in.close();
//		System.out.println("ReWrite Property File --> " + PropertyFileName);
//	}

}
