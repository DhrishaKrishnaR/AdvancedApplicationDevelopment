package com.birthday.aad.Dto.Request;

import com.birthday.aad.Entity.Enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String username;
    private String emailid;
    private String mobilenumber;
    private String password;
    private Role role;

}