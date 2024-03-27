package com.birthday.aad.Dto.Response;


import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse 
{
	private String token;

}