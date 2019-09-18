package co.edu.javeriana.myapp.server.myappserver.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

// Ver http://www.baeldung.com/role-and-privilege-for-spring-security-registration
public class User implements UserDetails {
	private static final long serialVersionUID = 1987040876334251017L;
	private String username;
	private String password;
	private boolean accountNonExpired;
	private boolean accountNonLocked;
	private boolean credentialsNonExpired;
	private boolean enabled;
	private List<GrantedAuthority> authorities = new ArrayList<>();

	public  User(String username, String password, String... authorities) {
		super();
		this.username = username;
		this.password = password;
		for (String auth : authorities) {
			GrantedAuthority ga = new GrantedAuthority(){
				private static final long serialVersionUID = -3483137563784976405L;

				@Override
				public String getAuthority() {
					return auth;
				}
			};
			this.authorities.add(ga);
		}
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isAccountNonExpired() {
		return accountNonExpired;
	}

	public boolean isAccountNonLocked() {
		return accountNonLocked;
	}

	public boolean isCredentialsNonExpired() {
		return credentialsNonExpired;
	}

	public boolean isEnabled() {
		return enabled;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		System.out.println(username + ": " + authorities);
		return authorities;
	}

	@Override
	public String toString() {
		return "User [username=" + username + ", password=" + password + "]";
	}


}
